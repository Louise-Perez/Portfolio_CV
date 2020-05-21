import React from 'react'; 
import style from '../CSS/hobbies.module.css';
import climbing from '../image/interets/climbing.png';
import bushcraft from '../image/interets/bushcraft.png';
import lecture from '../image/interets/lecture.png';
import travel from '../image/interets/travel.png';
import trekking from '../image/interets/trekking.png';

const Hobbies = () => {

    return (
        <div style={{textAlign: 'center'}}>
			<div className={style.interet}>
				<img  src={climbing} alt="Escalde"/>
			    <div className={style.description}>
					<p>Escalade</p> 
			    </div>
		    </div>
			<div className={style.interet}>
				<img  src={trekking} alt="Randonnée"/>
			    <div className={style.description}>
					<p>Randonnée</p> 
			    </div>
		    </div>
			<div className={style.interet}>
				<img  src={travel} alt="Voyage"/>
			    <div className={style.description}>
					<p>Voyage</p> 
			    </div>
		    </div>
			<div className={style.interet}>
				<img  src={bushcraft} alt="Bushcraft"/>
			    <div className={style.description}>
					<p>Bushcraft</p> 
			    </div>
		    </div>
			<div className={style.interet}>
				<img  src={lecture} alt="Lecture"/>
			    <div className={style.description}>
					<p>Lecture</p> 
			    </div>
		    </div>
        </div>
    )        
}

export default Hobbies;