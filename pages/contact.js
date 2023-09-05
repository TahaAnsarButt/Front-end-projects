import Header from '../components/Header';
export default function Contact() {
    return(
<div className="px-4 py-3">
  <Header/>
  <div className="mb-3">
  <label htmlfor="email" class="form-label">Email address:</label>
  <a>17001105007@skt.umt.edu.pk</a>
  </div>
  <div className="mb-3">
   <label htmlfor="contact#" class="form-label">Contact Number:</label>
  <label htmlfor="#" class="form-label">03177287182.</label>
  </div>
  <div className="mb-3">
    <label htmlfor="address" class="form-label">Address:</label>
  <label htmlfor="add" class="form-label">Industry State, Factory Area, Sialkot, 51310.</label>
  </div>
  </div>
    );
}