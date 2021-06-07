import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState();

	useEffect(() => {
		//Grab the movie information from database
		db.collection("movies")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					//Save the movie data
					setMovie(doc.data());
				} else {
					//Redirect to the homepage
				}
			});
	}, []);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} alt="" />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt="" />
					</ImageTitle>
					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="" />
							<span>PLAY</span>
						</PlayButton>
						<TrailerButton>
							<img src="/images/play-icon-white.png" alt="" />
							<span>TRAILER</span>
						</TrailerButton>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButton>
							<img src="/images/group-icon.png" alt="" />
						</GroupWatchButton>
					</Controls>
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	position: relative;
	min-height: calc(100vh-250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;
	margin-top: 60px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	margin: 24px 0px;
	min-height: 56px;
`;

const PlayButton = styled.button`
	font-size: 15px;
	margin: 0px 22px 0px 0px;
	padding: 0px 24px;
	height: 56px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	background: rgb (249, 249, 249);
	border: none;
	color: rgb(0, 0, 0);

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
	margin-right: 16px;
	height: 44px;
	width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 50%;
	border: 2px solid white;
	cursor: pointer;

	span {
		font-size: 30px;
		color: white;
	}
`;

const GroupWatchButton = styled(AddButton)`
	background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);
`;
