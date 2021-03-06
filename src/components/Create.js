import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { BiImageAdd } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { setDesc, setPrice, setTitle, setUrl, title } from "../State/formSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  // const userTitle = useSelector(title);

  const [formValues, setFormvalues] = useState({
    productTitle: "",
    productDesc: "",
    productPrice: "",
    files: [],
  });

  const clickHandler = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(setUrl(formValues.files[0].preview));
    // dispatch(setTitle(formValues.productTitle));
    // dispatch(setDesc(formValues.productDesc));
    // dispatch(setPrice(formValues.price));
    console.log(formValues);
  };

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    setFormvalues({ ...formValues, files: imageList });
  };

  return (
    <form
      className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-5/12 my-8 p-3 sm:p-5 mx-auto"
      onSubmit={submitHandler}
    >
      <div className="mb-[30px]">
        <label
          htmlFor="file"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Product Images
        </label>

        <ImageUploading
          multiple
          value={formValues.files}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px]">
              <button
                type="button"
                className={`${isDragging && `text-[#be123c]`} ${
                  formValues.files.length >= maxNumber &&
                  `pointer-events-none opacity-40`
                } rounded-lg border-2 border-dashed w-full h-full border-gray-500 aspect-square flex items-center justify-center cursor-pointer hover:border-gray-800 dark:hover:border-gray-200 transition-all ease-linear duration-150`}
                onClick={onImageUpload}
                disabled={formValues.files.length >= maxNumber}
                {...dragProps}
              >
                <BiImageAdd size={30} />
              </button>

              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-[4px] aspect-square"
                >
                  <button
                    className="absolute top-[4px] right-[4px] bg-[rgba(0,0,0,.32)] hover:bg-[rgba(0,0,0,.20)] dark:hover:bg-[rgba(0,0,0,.56)] transition-all rounded-[2px] flex justify-center items-center w-[1.375rem] h-[1.375rem]"
                    onClick={() => onImageRemove(index)}
                  >
                    <IoMdTrash />
                  </button>
                  <img
                    src={image["data_url"]}
                    alt="productImage"
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p className="text-[8px] sm:text-[14px] mt-[20px] flex items-center">
          <RiErrorWarningLine size={20} className="mr-1"/>
          The number of selected photos should not exceed 10
        </p>
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="title"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Product Title
        </label>
        <input
          type="text"
          id="title"
          onChange={clickHandler}
          name="productTitle"
          placeholder="Enter product title"
          className="block w-full bg-white px-[12px] py-[8px] text-[#24292f] text-[14px] border border-solid focus:outline-none rounded-lg"
        />
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="title"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Product Price
        </label>
        <input
          type="text"
          id="title"
          onChange={clickHandler}
          name="productPrice"
          placeholder="Enter product title"
          className="block w-full bg-white px-[12px] py-[8px] text-[#24292f] text-[14px] border border-solid focus:outline-none rounded-lg"
        />
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="desc"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Description
        </label>
        <TextareaAutosize
          type="text"
          id="desc"
          onChange={clickHandler}
          minRows={8}
          maxRows={10}
          name="productDesc"
          placeholder="Explain your product"
          className="block w-full resize-none bg-white px-[12px] py-[8px] text-[#24292f] text-[14px] border border-solid focus:outline-none rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-700 dark:bg-gray-200 text-white dark:text-[#000] p-2 rounded-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProduct;
