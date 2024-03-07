import Image from "next/image";

const Footer = () => {
  const d = new Date();
  return (
    <footer>
      <div className="w-full pt-50 thm-layer pb-30 opc8 relative">
        <div
          className="fixed-bg patern-bg back-blend-multiply thm-bg"
          style={{
            backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
          }}
        ></div>
        <div className="container mx-auto">
          <div className="footer-data v2 w-full">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="widget text-center w-full">
                  <div className="widget-inner inline-block">
                    <div className="logo  flex justify-center items-center">
                      <h1 className="mb-4">
                        <a href="#" className="footlogo" title="Home">
                          <Image
                            width={200}
                            height={100}
                            className="img-fluid"
                            src="/assets/images/logo.png"
                            alt="IslamBD"
                            srcSet="/assets/images/logo.png"
                          />
                        </a>
                      </h1>
                    </div>
                    <div className="mb-0 h5 text-center">
                      তোমরা আমার পক্ষ থেকে একটি আয়াত হলেও পৌঁছে দাও। <br /> -
                      জামে তিরমিযি।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar2 text-center w-full">
            <p className="mb-0 text-center font-ar">
              Quranic Jibon - Copyright {d.getFullYear()}. Developed by{" "}
              <a
                className="text-light"
                href="https://srdreamlab.com"
                title="SR Dream Lab"
                target="_blank"
              >
                SR Dream Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
