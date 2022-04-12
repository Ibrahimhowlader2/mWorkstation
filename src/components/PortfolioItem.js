import React from 'react';
const PortfolioItem = ({ portfolios }) => {
    return (
        <>
           
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                    {
                        portfolios.map((portfolio) => {
                            const { id, title, img, desc, icon } = portfolio;
                            return (
                                
                                    <article data-aos="zoom-in" data-aos-duration="800" key={id} className="shadow h-72 relative text-center group overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={img} className="h-full w-full object-cover" alt="" />
                                        </div>
                                        <div className="content absolute top-0 left-0 h-full w-full bg-white/80 flex flex-col items-center justify-center p-8 transform scale-0 group-hover:scale-100 ">
                                            <div className="icon_title flex items-center gap-2">
                                                <a className="text-5xl text-grayDark" href="#/">{icon}</a>
                                                <h2 className="text-xl font-medium text-primary"><a href="#/">{title}</a></h2>
                                            </div>
                                            <div className="text-sm text-gray mt-4">
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </article>
                            )
                        })
                    }
                </div>
        </>
    );
};
/* <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div> */

export default PortfolioItem;