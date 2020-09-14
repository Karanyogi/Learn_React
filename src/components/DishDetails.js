import React,{ Component } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardText,CardBody,CardTitle, CardHeader,Breadcrumb,BreadcrumbItem   } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetails extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }



    dishDetails(dish) {
        if (dish != null)
        {
            const menu = dish.comments.map((comment1) => {
                return (
                  <div >
                    <ul className="list-unstyled">
                    <li>{comment1.comment}</li>
                    </ul>
                    <ul className="list-unstyled">
                    <li>--{comment1.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(comment1.date)))} </li>
                    </ul>
                    </div>
                  );
                });
                return (
                    <div className="container">
                        <h4>Comments</h4>
                        {menu}
                    </div>
                );
        }
        else
            return(
                <div></div>
            );
    }



    render(){
        return(
            <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m1">
                
                    {this.dishDetails(this.props.dish)}
                </div>
            </div>
            </div>
      );
    }


}

export default DishDetails; 




// class component
/*
class DishDetails extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }



    dishDetails(dish) {
        if (dish != null)
        {
            const menu = dish.comments.map((comment1) => {
                return (
                  <div >
                    <ul className="list-unstyled">
                    <li>{comment1.comment}</li>
                    </ul>
                    <ul className="list-unstyled">
                    <li>--{comment1.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(comment1.date)))} </li>
                    </ul>
                    </div>
                  );
                });
                return (
                    <div className="container">
                        <h4>Comments</h4>
                        {menu}
                    </div>
                );
        }
        else
            return(
                <div></div>
            );
    }



    render(){
        return(
            <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m1">
                
                    {this.dishDetails(this.props.dish)}
                </div>
            </div>
            </div>
      );
    }


}
*/