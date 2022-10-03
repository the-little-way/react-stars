//imports

function StarRating(rating) {

	let maxR = 5; //set max rating here or and a 2nd arg to the props so it accepts a rating and it's max, then change 5 to the 2nd arg

	//console.log(rating, "StarRating");
	//calculate how many stars to show based on argument(rating), max rating is 5
	
	rating = parseFloat(rating.rating);
	let emptyStars;
	let fullStars;
	let halfStars;
	if (rating < maxR || rating == maxR){
		emptyStars = maxR - Math.round(rating); //Includes any fraction as a whole number to isolate real number of empty stars
		fullStars = Math.floor(rating); //Creates a whole number discarding the fraction
		halfStars = rating - fullStars;
		halfStars = Math.round(halfStars); //Creates a whole number out of the fraction, as number of half stars to render using the array hack
	}

					
	//using [...Array().keys()] constructor to create indices to use as iteration during .map()
	
	
	return (
		<div className="feature-stars flex-r">
			
			{[...Array(fullStars).keys()].map((i, c)=>{	
				return(
					<label key ={c}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="-20 -20 541.8 518.6" width="100%" stroke="#2f3940" preserveAspectRatio="xMidYMid meet" className="star-item star-filled" x="0" y="0"><path className="" fill="white" stroke="#2f3940" d="M501.8,185.5c0,4.4-2.6,9.3-7.8,14.5L384.5,306.7l25.9,150.8c0.2,1.4,0.3,3.4,0.3,6c0,4.2-1.1,7.8-3.2,10.7 c-2.1,2.9-5.2,4.4-9.2,4.4c-3.8,0-7.8-1.2-12.1-3.6l-135.4-71.2L115.5,475c-4.4,2.4-8.4,3.6-12.1,3.6c-4.2,0-7.4-1.5-9.5-4.4 c-2.1-2.9-3.2-6.5-3.2-10.7c0-1.2,0.2-3.2,0.6-6l25.9-150.8L7.5,200c-5-5.4-7.5-10.3-7.5-14.5c0-7.4,5.6-12.1,16.9-13.9l151.4-22 l67.9-137.2C240,4.1,244.9,0,250.9,0c6,0,11,4.1,14.8,12.4l67.9,137.2l151.4,22C496.2,173.4,501.8,178,501.8,185.5z"></path></svg>
					</label>
				)
			})}

			{[...Array(halfStars).keys()].map((i, c)=>{	
				return(
					<label key ={fullStars+1}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="-20 -20 541.8 518.6" width="100%" stroke="#2f3940" preserveAspectRatio="xMidYMid meet" className="star-item" x="0" y="0">
							<defs>
						        <linearGradient id="half-star">
						            <stop offset="50%" stop-color="white"/>
						            <stop offset="50%" stop-color="#4a4a4a" stop-opacity="1" />
						        </linearGradient>
						    </defs>
							<path className="" fill="url(#half-star)" stroke="#2f3940" d="M501.8,185.5c0,4.4-2.6,9.3-7.8,14.5L384.5,306.7l25.9,150.8c0.2,1.4,0.3,3.4,0.3,6c0,4.2-1.1,7.8-3.2,10.7 c-2.1,2.9-5.2,4.4-9.2,4.4c-3.8,0-7.8-1.2-12.1-3.6l-135.4-71.2L115.5,475c-4.4,2.4-8.4,3.6-12.1,3.6c-4.2,0-7.4-1.5-9.5-4.4 c-2.1-2.9-3.2-6.5-3.2-10.7c0-1.2,0.2-3.2,0.6-6l25.9-150.8L7.5,200c-5-5.4-7.5-10.3-7.5-14.5c0-7.4,5.6-12.1,16.9-13.9l151.4-22 l67.9-137.2C240,4.1,244.9,0,250.9,0c6,0,11,4.1,14.8,12.4l67.9,137.2l151.4,22C496.2,173.4,501.8,178,501.8,185.5z"></path>
						</svg>
					</label>
				)
			})}

			{[...Array(emptyStars).keys()].map((i, c)=>{	
				return(
					<label key ={fullStars+2+c}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" viewBox="-20 -20 541.8 518.6" width="100%" stroke="#2f3940" preserveAspectRatio="xMidYMid meet" className="star-item star-filled" x="0" y="0"><path className="" fill="#4a4a4a" stroke="#2f3940" d="M501.8,185.5c0,4.4-2.6,9.3-7.8,14.5L384.5,306.7l25.9,150.8c0.2,1.4,0.3,3.4,0.3,6c0,4.2-1.1,7.8-3.2,10.7 c-2.1,2.9-5.2,4.4-9.2,4.4c-3.8,0-7.8-1.2-12.1-3.6l-135.4-71.2L115.5,475c-4.4,2.4-8.4,3.6-12.1,3.6c-4.2,0-7.4-1.5-9.5-4.4 c-2.1-2.9-3.2-6.5-3.2-10.7c0-1.2,0.2-3.2,0.6-6l25.9-150.8L7.5,200c-5-5.4-7.5-10.3-7.5-14.5c0-7.4,5.6-12.1,16.9-13.9l151.4-22 l67.9-137.2C240,4.1,244.9,0,250.9,0c6,0,11,4.1,14.8,12.4l67.9,137.2l151.4,22C496.2,173.4,501.8,178,501.8,185.5z"></path></svg>
					</label>
				)
			})}
				
			
		</div>
	
	)
}

export default StarRating;
