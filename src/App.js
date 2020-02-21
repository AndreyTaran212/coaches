import React        from 'react';
import styles from './App.css';
import Icon         from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import classNames   from 'classnames';

const data =  [
		{
			id: 1,
			firstName: 'Brian',
			lastName: 'McCauley',
			level: "Level 1",
			img: 'https://7elementov.ru/wp-content/uploads/2016/10/men-images-1.jpg'
		},
		{
			id: 2,
			firstName: 'Chad',
			lastName: 'Hayes',
			level: "Level 1",
			img: 'https://www.massada-en.com/sites/default/files/tratamiento-massada-men.jpg'
		},
		{
			id: 3,
			firstName: 'Jeff',
			lastName: 'Buck',
			level: "Level 2",
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQenPjX57tyCN69RBWvDcN2d2joUrbm6wyChc5buL8peggD46Kc'
		},
		{
			id: 4,
			firstName: 'Kenny',
			lastName: 'Griffin',
			level: "Level 3",
			img: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2F83afb31c-38fc-11e9-9988-28303f70fcff?fit=scale-down&source=next&width=700'
		},
		{
			id: 5,
			firstName: 'Tom',
			lastName: 'Glover',
			level: "Level 3",
			img: 'https://manofmany.com/wp-content/uploads/2019/09/Haircuts-and-Tips-for-Men-with-a-Receding-Hairline.jpg'
		},
	];
let cx = classNames.bind(styles);

class SubmitButton extends React.Component {
	render () {
		let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
		let className = cx({
												 base: true,
												 inProgress: this.props.store.submissionInProgress,
												 error: this.props.store.errorOccurred,
												 disabled: this.props.form.valid,
											 });
		return <button className={className}>{text}</button>;
	}
};

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			coach: data.map(coach => ({...coach, isSelected: false}))

		};
	}

	select = () => {
		if (this.state.isSelected === false){
			return this.setState.isSelected = true
		}return this.setState.isSelected = false
	};
	renderCoach = () => {
		const { coach } = this.state;

		return coach.map(coach => (
			<div className="box" key={coach.id}>
				<div className="avatar">
					<img src={coach.img}/>
				</div>
				<div className="nameBox">
					<div>{coach.firstName}{coach.lastName}</div>
					<div>{coach.level}</div>
				</div>
				<div className={classNames()} onClick={this.select} >
					<Icon path={mdiCheck} color="#fff"/>
				</div>

			</div>
		));
	};

	render () {
		return <>
			{this.renderCoach()}
		</>;

	}

}

export default App;
