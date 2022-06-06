/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Photos.css";

export default function Photos(props){
    if (props.photos){
        return (
            <section className="Photos">
                <dix className="row">
                {props.photos.map(function(photo, index) {
                    return (
                    <div className="col-4" key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img src={photo.src.landscape} className="img-fluid" />
                        </a>
                    </div>
                    );
                })}
                </dix>
            </section>
        );
    } else {
        return null;
    }
   
}