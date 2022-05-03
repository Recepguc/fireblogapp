import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";
import { AuthContext } from "../contexts/AutContext";
import { BlogContext } from "../contexts/BlogContext";
import ToastNotify from "../helpers/ToastNotify";

const Details = () => {
  const [likeNumber, setLikeNumber] = useState(0);
  const [likeColor, setLikeColor] = useState();
  const [click, setClick] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { DeleteBlog } = useContext(BlogContext);

  const DeletePage = (id) => {
    DeleteBlog(id);
    navigate("/");
    ToastNotify(`${item.title} Deleted Successfully`);
  };
  const UpdateBlog = () => {
    navigate("/updateblog", { state: { item } });
  };

  ///like make red and +1 function
  const handleLike = () => {
    if (click) {
      setLikeNumber(likeNumber + 1);
      setLikeColor("red");
      setClick(!click);
    } else {
      setLikeNumber(likeNumber - 1);
      setLikeColor();
      setClick(!click);
    }
  };

  const location = useLocation();
  const item = location.state.item;
  console.log(item.author);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Card
        sx={{
          width: 600,
          height: 800,
        }}
      >
        <div>
          <CardMedia
            component="img"
            height="400"
            image={item.imageURL}
            alt="Paella dish"
            objectfit="contain"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "block",
                backgroundColor: "#EFEEFE",
                padding: "0.5rem",
                fontFamily: "Girassol",
              }}
            >
              <div
                style={{
                  paddingTop: "1rem",
                  textAlign: "center",
                  color: "#046582",
                }}
              >
                <h3>{item.title}</h3>
                <h6 style={{ color: "grey" }}>{item.date}</h6>
              </div>
              {item.content}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "black", textAlign: "start", mt: 2 }}
            >
              <IconButton sx={{ color: "black", p: 0 }}>
                <AccountCircleIcon fontSize="small" />
              </IconButton>
              {item.author}
            </Typography>
          </CardContent>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CardActions disableSpacing>
            <IconButton
              onClick={() => {
                handleLike();
              }}
              sx={{ color: `${likeColor}` }}
              aria-label="add to favorites"
            >
              <FavoriteIcon />
            </IconButton>
            <span>{likeNumber}</span>
            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <span>1</span>
          </CardActions>

          {currentUser.email === item.author ? (
            <>
              <Button variant="contained" onClick={() => UpdateBlog(item.id)}>
                UPDATE
              </Button>
              <Button
                sx={{ backgroundColor: "red" }}
                variant="contained"
                onClick={() => DeletePage(item.id)}
              >
                DELETE
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Details;
