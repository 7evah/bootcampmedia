import React from 'react';
import '../src/up.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function up() {
  return (
    <div className="up">
      <h1>Travel Destinations</h1>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Hong-Kong/Hong-Kong-city/112086_SCN_HongKong_iStock466733790_Z8C705.jpg?tr=w-1200%2Cfo-auto" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://macaonews.org/wp-content/uploads/2024/12/Macao-Ranking.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://www.telegraph.co.uk/content/dam/travel/2025/04/25/TELEMMGLPICT000421224693_17455902368470_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg?imwidth=640" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,f_jpg,h_757,q_65,w_640/v1/clients/lasvegas/Strip_Pic_1200x800_24d79803-65f2-429a-a330-ce6edb8bcc8d.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default up;
