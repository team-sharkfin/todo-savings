const Banner = (props) => (
    <div className="row g-0" id="userBanner">
        <div className="col-sm-12 p-4">
            <h1 className="display-5" id="nameBanner">{props.name}</h1> 
        </div>
    </div>
  );

export default Banner;