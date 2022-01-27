import { FC, SetStateAction, useState } from "react";
import { Empty, Upload } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { PictureOutlined } from "@ant-design/icons";
import { JSDocUnknownTag } from "typescript";

const UploadBackground: FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange = (newFileList: {
    fileList: SetStateAction<UploadFile<unknown>[]>;
  }): void => {
    setFileList(newFileList.fileList);
  };

  const onPreview = async (file: UploadFile<unknown>): Promise<unknown> => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        if (file.originFileObj) reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src ?? "";
    const imgWindow = window.open(src);
    return imgWindow?.document.write(image.outerHTML);
  };

  return (
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
  );
};

export default UploadBackground;
