import './App.css';

function App() {
  return (
    <div className="mainContainer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MTCCfront.jpg" className="header_logo"  alt="logo"/>
        <h1>
            Studiz at IIT!
        </h1>
        <h2>Our pitch:</h2>
        <p>
            Finding a spot to quietly study on campus is hard. With so many people attending IIT, there is a very high chance that you will be surrounded by noise upon finding your preferred spot. We want to find a way to eliminate this issue. Introducing Studiz, an easy to use web-app for finding and recommending a place to study on campus. Our app will suggest the user with a quiet place to study based on user submitted reviews of popular places on campus. These reviews will contain relevant information such as time stamps, locations, and approximate noise level. We will then develop an algorithm to sort through this information to find the best place for the user based on their input variables such as time and current location.
        </p>
        <p>
            Developers: Spencer Albrecht, Tashi Bapu, John Chmura, Sakher Yaish, Eileen Garay, and Scarlett Kadan
        </p>
    </div>
  );
}

export default App;
