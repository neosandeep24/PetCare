// import svgMap from 'svgmap';
// import 'svgmap/dist/svgMap.min.css';

// 		new svgMap({
// 			targetElementID: 'svgMap',
// 			maxZoom:10,
// 			data: {
// 			  data: {
// 				gdp: {
// 				  name: 'Total pet count',
// 				  format: '{0}',
// 				  thousandSeparator: ',',
// 				  thresholdMax: 100000000,
// 				  thresholdMin: 1000
// 				},
// 				// change: {
// 				//   name: 'Change to year before',
// 				//   format: '{0} %'
// 				// }
// 			  },
// 			  applyData: 'gdp',
// 			  values: {
// 				AF: { gdp: 40000 },
// 			DZ: { gdp: 35000000 },
// 			AR: { gdp: 44900000 },
// 			AM: { gdp: 10000 },
// 			AW: { gdp: 35000 },
// 			AU: { gdp: 28700000 },
// 			AT: { gdp: 895000 },
// 			BS: { gdp: 80000 },
// 			BD: { gdp: 2400000 },
// 			BB: { gdp: 12000 },
// 			BE: { gdp: 2300000 },
// 			BT: { gdp: 10000 },
// 			BA: { gdp: 20000 },
// 			BR: { gdp: 70000000 },
// 			BG: { gdp: 1565000 },
// 			CA: { gdp: 16400000 },
// 			CL: { gdp: 16500000 },
// 			CO: { gdp: 4400000 },
// 			CR: { gdp: 1800000 },
// 			CZ: { gdp: 2200000 },
// 			DK: { gdp: 2600000 },
// 			EG: { gdp: 1500000 },
// 			GQ: { gdp: 1000000 },
// 			EE: { gdp: 4000000 },
// 			ET: { gdp: 8000000 },
// 			FI: { gdp: 2100000 },
// 			FR: { gdp: 7400000 },
// 			DE: { gdp: 35000000 },
// 			GR: { gdp: 660000 },
// 			GN: { gdp: 460000 },
// 			HK: { gdp: 1200000 },
// 			HU: { gdp: 2200000 },
// 			IS: { gdp: 5000 },
// 			IN: { gdp: 32000000 },
// 			IR: { gdp: 21000000 },
// 			IE: { gdp: 500000 },
// 			IL: { gdp: 800000 },
// 			IT: { gdp: 32000000 },
// 			CN: { gdp: 220000000 },
// 			JP: { gdp: 21000000 },
// 			KE: { gdp: 6000000 },
// 			KP: { gdp: 5400000 },
// 			LB: { gdp: 55000 },
// 			LU: { gdp: 150000 },
// 			MY: { gdp: 11000000 },
// 			MU: { gdp: 300000 },
// 			MX: { gdp: 80000000},
// 			MN: { gdp: 10000000 },
// 			MA: { gdp: 3000000},
// 			NP: { gdp: 100000 },
// 			NL: { gdp: 5000000 },
// 			NZ: { gdp: 46000000 },
// 			NG: { gdp: 5000000 },
// 			NO: { gdp: 13000000 },
// 			PK: { gdp: 200000 },
// 			PE: { gdp: 5000000 },
// 			PH: { gdp: 22000000 },
// 			PL: { gdp: 10400000 },
// 			PT: { gdp: 3400000 },
// 			PR: { gdp: 1500000 },
// 			RO: { gdp: 4150000 },
// 			RU: { gdp: 63500000 },
// 			SA: { gdp: 2000000},
// 			SG: { gdp: 220000 },
// 			SK: { gdp: 1500000 },
// 			SI: { gdp: 1000000 },
// 			SO: { gdp: 10000000  },
// 			ZA: { gdp: 6000000  },
// 			SS: { gdp: 36000000  },
// 			ES: { gdp: 28000000  },
// 			LK: { gdp: 6000000  },
// 			SD: { gdp: 40000000  },
// 			SE: { gdp: 5000000  },
// 			CH: { gdp: 4000000  },
// 			TH: { gdp: 14500000 },
// 			TR: { gdp: 6000000  },
// 			UA: { gdp: 10000000  },
// 			AE: { gdp: 2000000  },
// 			GB: { gdp: 19000000  },
// 			US: { gdp: 144000000  },
// 			VN: { gdp: 5400000 },
// 			ZW: { gdp: 250000},



				
// 				// ...
// 			  }
// 			}
// 		  });

function Collage(){
 return (
  <div>
  
<div className="gallery">
		
	<div className="gallery__column">
		<a href="https://unsplash.com/@hikiapp" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/A9rQeI2AdR4/300x300" alt="" className="gallery__image"/>
			</figure>
		</a>

		<a href="https://unsplash.com/@j_erhunse" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/vp9mRauo68c/300x500" alt="" className="gallery__image"/>
			</figure>
		</a>
	</div>
	
	<div className="gallery__column">
		<a href="https://unsplash.com/@marilezhava" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" className="gallery__image"/>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" className="gallery__image"/>
			</figure>
		</a>

	</div>
	
	<div className="gallery__column">

		<a href="https://unsplash.com/@majestical_jasmin"className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" className="gallery__image"/>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@dimadallacqua" className="gallery__link">
			<figure className="gallery__thumb">
				<img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua" className="gallery__image"/>
			</figure>
		</a>
	</div>
</div>


  </div>
 )
}

function Map() {
    return (
      <div>
            <Collage/>
          {/* <svgMap/> */}
      </div>
    );
  }
  
  export default Map;
  