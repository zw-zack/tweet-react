// let tweetArr = []


// const allTweets=(file) =>{
// 	for(var i = 0; i<file.length; i++){
// 		tweetArr.push(file[i].text)
// 	}
// }
// allTweets(tweets)

// const text=(tweet) => {
// 	return tweet.text
// }
var greet = "hello"

class ListItem extends React.Component {

		render() {
		return (
		<li>{this.props.item}</li>
		);
	}
}



class List extends React.Component {

render() {
let itemsElements = this.props.items.map( (item, index) => {
return <ListItem item={item.text} key={index}></ListItem>;
});
return (
<ul>
	{itemsElements}
</ul>
);
}
}



ReactDOM.render(
<List items={tweets} />,
document.getElementById('root')
);





