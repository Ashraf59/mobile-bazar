import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const year = form.year.value;
        const category = form.category.value;
        const details = form.details.value;
        // console.log(details, name, price);

        const AddProducts = {
            productName: name,
            price,
            condition,
            phone,
            address,
            year,
            category,
            details
        }
        console.log(AddProducts);
        

    }
    return (
        <div>
            <h2 className="text-3">Add Products</h2>

            <section className='flex justify-center'>
           
            <div className="shadow shadow-slate-500 w-96 p-7 rounded-lg ">
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="price" type="text"  placeholder="Product Price" className="input w-full input-bordered" />
                        <select name='condition' className="select select-bordered">
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                        <input name="phone" type="text"  placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="address" type="text"  placeholder="Meeting Location" className="input w-full input-bordered" />
                        <input name="year" type="text"  placeholder="Year of Purchase" className="input w-full input-bordered" />
                        <select name='category' className="select select-bordered">
                        <option value='excellent'>Iphone</option>
                        <option value='good'>Samsung</option>
                        <option value='fair'>Xaiomi</option>
                    </select>
                    <textarea name="details" id="" placeholder='Add your text here'></textarea>
                        
                        <br />
                        <input className="btn w-full border-none bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold" type="submit" value="Submit" />
                    </form>
            </div>
        </section>

        </div>
    );
};

export default AddProducts;