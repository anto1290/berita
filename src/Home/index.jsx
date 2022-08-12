import axios from 'axios'
import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Circles } from 'react-loader-spinner'
import CardComponent from '../Components/Card'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Search from '../Components/Search'

export default class Home extends Component {
    state = {
        search: '',
        errors: '',
        loading: true,
        data: []
    }
    componentDidMount() {
        setTimeout(() => {
            axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=f582b3efe3cd45a596bb2b3cee9e963b')
                .then(res => res.data)
                .then(data => {
                    this.setState({ data: data.articles })
                    this.setState({ loading: false })

                })
                .catch(err => this.setState({ errors: err }));
        }, 5000);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            this.setState({ errors: '' });
            this.setState({ loading: true })
            axios.get(`https://newsapi.org/v2/top-headlines?q=${this.state.search}&country=id&apiKey=f582b3efe3cd45a596bb2b3cee9e963b`)
                .then(res => res.data)
                .then(data => {
                    setTimeout(() => {
                        this.setState({ data: data.articles })
                        this.setState({ loading: false })
                    }, 2000);
                }
                ).catch(err => this.setState({ errors: err }));
        }
    }

    render(props) {
        let berita = this.state.data;
        return (
            <>
                <Header />
                <Search onChange={value => this.setState({ search: value })} />
                <Container>
                    <Row className='d-flex flex-wrap mt-5'>
                        {this.state.loading && <Circles color="#00BFFF" wrapperClass="mt-5 justify-content-center" height={100} width={100} />}
                        {berita.length >= 1 ? berita.map((item, index) => (
                            <Col key={index} md={4}>
                                <CardComponent item={item} />
                            </Col>
                        )
                        ) : <h1>No Data</h1>}
                        {this.state.errors && <h1>{this.state.errors}</h1>}

                    </Row>
                </Container>
                <Footer />
            </>
        )
    }
}
