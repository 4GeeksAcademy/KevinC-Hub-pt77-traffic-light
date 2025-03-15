import React, { useState } from "react";

//create your first component
const Home = () => {
const [glowy, setglowy] = useState("red")
	return (
		<div className="Body">
			<div className="trafficlight">
				<div className="stick"></div>
					<div className="lightgroup">
						<div className={glowy == "red" ? "red light glowy": "red light"}
							onClick={()=>setglowy("red")}>
						</div>
						<div className={glowy == "yellow" ? "yellow light glowy": "yellow light"}
							onClick={()=>setglowy("yellow")}>
						</div>
						<div className={glowy == "green" ? "green light glowy": "green light"}
							onClick={()=>setglowy("green")}>
						</div>
					</div>
			</div>
		</div>
		
	);
};

export default Home;