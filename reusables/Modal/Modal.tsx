import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import styles from "./Modal.style";
import { API_BASE_URL } from "../../pageConstant/general";

const Modal = (props) => {
  const { title, desc, isModalOpen, cover, images } = props;
  const [isShow, setShowStatus] = useState(false);
  console.log(images);

  useEffect(() => {
    isModalOpen && setShowStatus(true);
  }, [props]);

  if (isShow) {
    return (
      <div style={styles.modal}>
        <div>
          <div
            style={styles.modalOverlay}
            onClick={() => setShowStatus(false)}
          />
          <div style={styles.modalContent}>
            <div style={styles.modalTitle}>{title}</div>
            <div>
              <Image
                src={cover}
                width={"100%"}
                height={240}
                objectFit={"cover"}
                style={{
                  borderRadius: 12,
                  border: '1px solid gainsboro'
                }}
              />
            </div>
            <div style={styles.modalDesc}>{desc}</div>
            <div style={styles.modalImageContainer}>
              {images.map((item, index) => (
                <div style={styles.modalImage}>
                  <Image
                    src={API_BASE_URL + item.attributes.url}
                    height={160}
                    objectFit={"cover"}
                    style={{
                      borderRadius: 12,
                      border: '1px solid gainsboro'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Modal;
