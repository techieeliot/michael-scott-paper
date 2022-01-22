/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, SetStateAction, useEffect, useState } from "react";
import { Empty, Upload } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import ImgCrop from "antd-img-crop";
import { PictureOutlined } from "@ant-design/icons";

const UploadBackground: FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange = (newFileList: {
    fileList: SetStateAction<UploadFile<any>[]>;
  }) => {
    setFileList(newFileList.fileList);
  };

  const onPreview = async (file: UploadFile<any>) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        if (file.originFileObj) reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result as any);
      });
    }
    const image = new Image();
    image.src = src!;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        multiple={false}
        maxCount={1}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && (
          <Empty
            image={<PictureOutlined style={{ fontSize: "75px" }} />}
            description="select image"
            imageStyle={{
              height: 60,
            }}
          />
        )}
      </Upload>
    </ImgCrop>
  );
};

export default UploadBackground;
