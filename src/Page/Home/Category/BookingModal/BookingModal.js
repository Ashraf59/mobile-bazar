import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { model, resale_price, image } = booking;
    const navigate = useNavigate();

    const handleNull = () => {
        setBooking(null)
    }

    const handleBooking = (event) => {
        const data = new Date()
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value
        // [3, 4, 5].map((value, i) => console.log(value))
        const book = {
            model,
            customer: name,
            email,
            phone,
            price: resale_price,
            address,
            image,
            time: data.getTime()
        }
        fetch('https://mobile-bazar-server-ten.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged && user?.email) {
                    setBooking(null)
                    toast.success('Booking confirmed');
                    
                }
                else {
                    toast.error('You have to first logIn');
                    navigate('/login')
                    return
                }

            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal shadow shadow-slate-500">
                <div className="modal-box relative">
                <label onClick={handleNull} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                    <h3 className="font-bold text-lg">{model}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" defaultValue={booking.model} disabled className="input w-full input-bordered " />
                        <input type="text" defaultValue={booking.resale_price} disabled className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className="btn w-full border-none btn bg-gradient-to-r from-rose-500 to-purple-500 hover:from-green-500 hover:to-blue-500 text-white border-0 font-bold" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;