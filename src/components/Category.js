import React from 'react';

const Category = ({ filterItems, categories }) => {
    return (
        <div className="mb-12 flex md:flex-row flex-col justify-center">
            {
                categories.map((categoric, index) => {
                    return (
                        <button
                            className="bg-transparent border text-lg capitalize my-1 mx-3 py-2 px-4 hover:bg-primary hover:text-white "
                            key={index}
                            type="button"
                            onClick={() => filterItems(categoric)}
                        >
                            {categoric}
                        </button>
                    )
                })
            }



        </div>
    );
};

export default Category;