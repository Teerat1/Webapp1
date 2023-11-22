import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "/src/components/Footer";
import pic1 from "../public/assets/image/1.png"
import pic2 from "../public/assets/image/2.png"
import pic3 from "../public/assets/image/3.png"
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>Parallelth Studio</title>
      </Head>

      <section className="mainSection" style={{ fontFamily: 'Inter', overflowX: "hidden" }}>
        <div className="container h-100" style={{ marginTop: "15rem", marginBottom: "15rem" }}>

        </div>
      </section>

      <section className="d-flex my-5" style={{ fontFamily: 'Inter', paddingLeft: "8%", paddingRight: "8%" }}>
        <div className='col flex-column'>
          <h1 style={{ color: "#3B3B3B", fontFamily: "Anton", fontSize: "50px" }} className='pb-2'>PARALLELTH: What is it?</h1>
          <p className='pt-4' style={{ fontFamily: "Prompt", fontWeight: "500", lineHeight: "35px" }}> Our company is a dynamic and innovative technology company specializing in the development of cutting-edge games and web applications. With a passion for creativity and technology, we strive to deliver exceptional digital experiences that captivate and engage users. Our team of skilled and creative game developers works tirelessly to bring immersive and entertaining gaming experiences to life. Whether it's mobile, console, or PC gaming, we leverage the latest technologies to create games that resonate with diverse audiences.</p>
        </div>
        <div className='col '>
          <div className='py-4' style={{ marginLeft: "45%", marginRight: "5%", paddingLeft: "5%", paddingRight: "5%", marginTop: "-200px", zIndex: "auto", position: "relative", background: "#2D2D2D", color: "white" }}>
            <p className='py-3' style={{ fontFamily: "Anton", fontSize: "60px", textAlign: "center" }}>PARALLELTH</p>
            <p style={{ textAlign: "center", fontFamily: "Prompt", fontWeight: "300", lineHeight: "35px" }}>We thrive on innovation and creativity. Our game development team pushes the boundaries of imagination, creating unique and memorable gaming experiences. Simultaneously, our web development team crafts solutions that seamlessly blend aesthetics with functionality.</p>
          </div>
        </div>
      </section>
      <div className='secondSection'>
        <section className="d-flex my-5 flex-fill" >
          <div className='col'>
            <div className='col pt-5 ' style={{ background: "#2D2D2D", color: "white", minHeight: "820px", rotate: "-90deg",borderRadius:"10px" }}>
              <h2><span style={{ color: "#3B3B3B", fontWeight: 400, fontSize: "60px", background: "#2D2D2D", color: "#F0F0F0", fontFamily: "Anton" }}>PARALLELTH</span></h2>

            </div>

          </div>
          <div className='col pe-5 pt-5' style={{ color: "#3B3B3B" }}>
            <div className='d-flex d-grid gap-3 pb-5' style={{ marginLeft: "-90%" }}>
              <div className='d-flex flex-fill justify-content-end'>
                <Image src={pic1}></Image>
              </div>

              <div className='col d-grid gap-3'>
                <Image src={pic2}></Image>
                <Image src={pic3}></Image>
              </div>
            </div>
            <div style={{marginLeft:"30%",fontFamily: "Prompt", fontWeight: "500", lineHeight: "35px" }}>
              <p>Our mission is to redefine digital experiences through innovative game and web development. We are committed to staying at the forefront of technology, delivering products that not only meet but exceed the expectations of our clients and users.</p>
              <p>For inquiries, collaboration opportunities, or to discuss your project requirements, feel free to reach out to us at our company</p>

            </div>
          </div>
        </section>



        <Footer />
      </div>


    </div>


  );
}
