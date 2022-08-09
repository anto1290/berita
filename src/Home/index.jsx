import axios from 'axios'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Circles } from 'react-loader-spinner'
import CardComponent from '../Components/Card'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Search from '../Components/Search'

const Home = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=f582b3efe3cd45a596bb2b3cee9e963b')
                .then(res => res.data)
                .then(data => {
                    setArticles(data.articles)
                    setLoading(false);

                })
                .catch(err => setError(err.message));
        }, 5000);
    }, []);

    useEffect(() => {
        if (search !== '') {
            setLoading(true);
            setTimeout(() => {
                axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=f582b3efe3cd45a596bb2b3cee9e963b`)
                    .then(res => res.data)
                    .then(data => {
                        setArticles(data.articles)
                        setLoading(false);
                    })
                    .catch(err => setError(err.message));
            }, 2000);
        }
    }, [search]);
    return (
        <>
            <Header />
            <Search onChange={value => setSearch(value)} />
            <Container>
                <Row className='d-flex flex-wrap mt-5'>
                    {loading && <Circles color="#00BFFF" wrapperClass="mt-5 justify-content-center" height={100} width={100} />}
                    {articles.length >= 1 ? articles.map((item, index) => (
                        <Col key={index} md={4}>
                            <CardComponent item={item} />
                        </Col>
                    )
                    ) : <h1>No Data</h1>}
                    {error && <h1>{error}</h1>}

                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Home;