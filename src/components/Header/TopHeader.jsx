import React from "react";
import socialLinks from "../data/header.json";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";

export default function TopHeader() {
  return (
    <div className="top_bar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-row flex-wrap">
          {/* Left Section (Email) */}
          <div className="left-logo-section">
            <ul className="navbar-nav email_link">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex"
                  href="mailto:info@appplanter.com"
                >
                  <i className="material-icons">mail</i>
                  info@appplanter.com
                </Link>
              </li>
            </ul>
          </div>
          {/* Right Social Section */}
          <div className="right-social-section">
            <ul className="nav social_links">
              {socialLinks?.socialLinks?.map((data, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link"
                      href={data?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={`fa fa-${data?.icon}`}></i>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
