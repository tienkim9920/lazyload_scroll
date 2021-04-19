import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home(props) {

    const [items, set_items] = useState([])
    const [page, set_page] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8000/api/Product/scoll/page?page=${page}&count=6&search=t`)
                .then((response) => response.json())
                .then(data => {
                    set_items(prev => [...prev, ...data])
                })
                .catch(err => console.log(err))
        }, 2500)
    }, [page])

    

    return (
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={() => set_page(page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                {
                    items && items.map(value => (
                        <div key={value._id}>
                            <img src={value.image} style={{ width: '300px'}} />
                        </div>
                    ))
                }
            </InfiniteScroll>
        </div>
    );
}

export default Home;

