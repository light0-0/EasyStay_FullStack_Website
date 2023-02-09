import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../styles/listing.css";
import {
  FaBed,
  FaBath,
  FaParking,
  FaHouseDamage,
  FaArrowCircleRight,
  FaMapMarker,
} from "react-icons/fa";

//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //eslint-disable-line
  const params = useParams();
  const auth = getAuth(); //eslint-disable-line

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout title={listing.name}>
      <div className="row listing-container">
        <div className="col-md-8 listing-container-col1">
          {listing.imgUrls === undefined ? (
            <Spinner />
          ) : (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              className="mySwipe"
            >
              {listing.imgUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <img src={listing.imgUrls[index]} alt={listing.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="col-md-1  listing-container-col-1">
          <h3 className='name'>{listing.name}</h3>
          <h6 className='Rs'>
            Price :{" "}
            {listing.offer ? listing.discountedPrice : listing.regularPrice} /
            ₹
          </h6>
          <p className='rent'>{listing.type === "rent" ? "Rent" : ""}</p>
          <p className='offer'>
            {listing.offer && (
              <span>
                {listing.regularPrice - listing.discountedPrice} Discount
              </span>
            )}
          </p>
          <p className='bedroom'>
            <FaBed size={20} /> &nbsp;
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </p>
          <p className='bathroom'>
            <FaBath size={20} /> &nbsp;
            {listing.bathrooms > 1
              ? `${listing.bathrooms} bathrooms`
              : "1 Bathroom"}
          </p>
          <p className='parking'>
            <FaParking size={20} /> &nbsp;
            {listing.parking ? `Parking spot` : "no spot for parking"}
          </p>
          <p className='furnished'>
            <FaHouseDamage size={20} /> &nbsp;
            {listing.furnished ? `furnished house` : "not furnished"}
          </p>
          <p className='address'>
            <FaMapMarker size={20} /> &nbsp;
            {listing.address ? `${listing.address}` : "Address Not found"}
          </p>
          
        
          <p className='contact'>
  {listing.type === "rent" ? "Contact Landlord" : "Contact Roommate"}{" "}
  <Link 
    className="btn btn-danger"
    to={`/contact/${listing.useRef}?listingName=${listing.name}`}
  >
    <FaArrowCircleRight size={20} />
  </Link>
  <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
</p>
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
