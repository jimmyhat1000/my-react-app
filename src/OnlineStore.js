import React from 'react';

function OnlineStore() {
  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Online Store</h1>
          <p>Mission, Vission & Values</p>
        </div>
      </div>

      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a>Home</a></li>
              <li><a>Products</a></li>
              <li><a>Deals</a></li>
              <li><a>Stores</a></li>
              <li><a>Contact</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
              <li><a><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel panel-danger">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel panel-success">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
        </div>
      </div><br />

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: '100%' }}  /></div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineStore;