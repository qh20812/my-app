import React,{useState} from "react";
import "./style.css";

export default function MyProfile() {
  const [profile, setProfile] = useState({ten: "", tuoi: ""});
  const handleClick = (e) => {
    const {name, value} = e.target;
    setProfile({...profile, [name]: value});
  }
    return (
        <div className="profile-page">
            <h1 className="profile-heading">Nhập Profile</h1>
            <div className="profile-form">
              <label className="profile-label">
                Tên của bạn
                <input className="profile-input" onChange={handleClick} name="ten" value={profile.ten} type="text" placeholder="Nhập tên..." />
              </label>
              <label className="profile-label">
                Tuổi của bạn
                <input className="profile-input" onChange={handleClick} name="tuoi" value={profile.tuoi} type="text" placeholder="Nhập tuổi..." />
              </label>
            </div>
            <div className="profile-result">
              <p className="profile-result-text">Tên: <span>{profile.ten || '-'}</span></p>
              <p className="profile-result-text">Tuổi: <span>{profile.tuoi || '-'}</span></p>
            </div>
        </div>
    )
}
