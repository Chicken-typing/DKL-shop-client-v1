import React from 'react'
import './style.scss'
import logo from '../../assets/icons/logo-dark.png'
function Footer() {
  return (
    <div className='Footer'>
      <div className="foot-nav-title-list">
      <ul>
        <li className='foot-nav-title' >FIND A STORE</li>
        <li className='foot-nav-title'>BE COME A MEMBER</li>
        <li className='foot-nav-title'>SIGN UP FOR EMAIL</li>
        <li className='foot-nav-title'>SEND US FEEDBACK</li>
      </ul>
      <ul>
        <div className='foot-nav-title'>GET HELP</div>   
        <li>Order status</li>
        <li>Delivery</li>
        <li>Return</li>
        <li>Payment options</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <div className='foot-nav-title'>ABOUT US</div>
        <li>News</li>
        <li>Carrers</li>
        <li>Inventor</li>
        <li>Sustainability</li>
        </ul>
      </div>
        <div id="strength-line"></div>
        <div className="foot-nav-icon-list">
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAR9JREFUSEvtV9FtwkAUszcoE8AGdIPCBIxAN6Ab0A26AiOwAbABnaCwAZ3AlVEuupx0kRAXgqK+rxwoz/J79nsXoqdgT7h4HmBJLwCmhStxJnmKczYYS5oA+CkMGtKNSF7CIQWeAdh1BDwnuR8M8C+ATwDHqFqvAL6ic3HG3wBmcf8MJiltW3HgRsLAsHNgkrVAJbm8KwB2h23pc4iijA8kXdJrSNoCWGRc0Smw7fI2OGCr+KNidSFZW6jqsXvreAewLNnjRl9zU06Sfb3uAzgV2t3i8pbZVEy8dcKzVe3yjqNS21YPsdMwVR3rKR0g/4zj6tyt6mGV+tbL3i3iyl/2qtWW7tHcVPTvbbM6fu/Uer1tQyj93/N8SZRmlsv3B2yG3h+XcgmJAAAAAElFTkSuQmCC" alt="facebook-icon"/></li>
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVBJREFUSEvtleFRwzAMhZ8mgBHYADaAblA2KBNAJwAmoEwAG8AGlAkoGzACTPC4l5NL8Nlx0ySE3lV/E+vTe5Zkw0hhI3GxB/+Z8//DapJTANcu+9bMnrtYQPKslm9uZquQb62Y5AmAtwi0MLP5NnCSCwCXtbOfACYBXgdfAbhLQFTluZl9bFIAyUMATwCkNg6pVkE/40TypmZLfEDVXpSsd2sFFTwVuj5xNgaHJFnrC4WH81uDleCX9SSP3Fr1SCk6gZW8st4pDw3WxoV0BpeU5b7vBvgVwGlLibkzrRRP/A4fARwUCvgCMPMeeEn82w5sZkvvXq3Q4wz8HcBUi8bnuR9wgCVWoT7dm5k2XxWDgD2xHhNZr5jFG20wsMO1OJDa4YOCm5psZ8C5Z1Fv6LLNHDcoTj6LurPUuPQFXo9b1RttlPT57x7cp5uNuUaz+htRFsYfLJ/vVgAAAABJRU5ErkJggg==" alt="gmail-icon"/></li>
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAg5JREFUSEvNl71u1EAUhb/zBMAT8NNAB6loKIJEBUIECXrokQgVCAqChBSJKpF4AHqQIAgaGohoKJMyoiB5ApInuOisxpJ31mOvvUbJVF57xt/cM9fn3hXHNHRMXE42OCLOAWfnVOdA0n7X3GLEEXEaeAk8AHzdZxwC74BXknw9MxrBEbEMfBwAzAGG3pX0I38wA06R/hkBWrEs+1IeeRN4A3jcR9ds7m76fbl2f1PSan1eE9jynBoI3pV0xWsjYgeo4PuSzhfBSea/HdDtlDhV5jofVhJkR9JSA9i3ztTlnoo4JdX3FvBDSc7WmRERa+kr8Ias2iTy2rheT7I+4Ak0Ii4B94Fr6aU/gfeS9mrwpr0NAm9LWo6Ii8Bb4Eb25m/AI0m/I8IRN5nNIPATSRsR8QJ4XTiK55LWW6IeBJ4sioivwM0C+LOkOxHhRLP55GMh8BfgVgG8JWllbHAl9TNgvQB+KunN2FJPDCAiLgB2ttsZfAtYdVUaO7nMqaK2A90Drib4L+BDgrbZ7aAzrgJ0VJu51LUSOuXHfQzEdbfLMv2dOjJ7sefboVyz3Sy0jbJlelXLGXW8t/Wxu5Kpjf2Psti0g7nKouWzjPP2WF1KHPg4OhuBJLfP7dMI8COXzLlan2r7KVNd6myBfaM30OVzrVezV/hc8vpakthmM7y97Tq4RZ+f7H8Si0bXtP4fkWfxH/jGYSoAAAAASUVORK5CYII=" alt="instagram-icon"/></li>
      </div>
      <img id='foot-nav-logo' src={ logo} alt="logo-icon" />
    </div>
  )
}

export default Footer