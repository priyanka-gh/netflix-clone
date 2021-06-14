import './HomeScreen.css';
import Nav from '../Navbar/Navbar';
import Row from '../Row/Row';
import Banner from '../Banner/Banner';
import requests from '../../util/requests';
const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='Documetries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
