import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setDesc, setPrice, setTitle, setUrl, title } from "../state/formSlice";

const CreateProduct = () => {

  const dispatch = useDispatch();
  const userTitle = useSelector(title)
  
  const [formValues, setFormvalues] = useState({
    productTitle: "",
    productDesc: "",
    productPrice : "",
    files: [],
  });

  const clickHandler = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUrl(formValues.files.preview))
    dispatch(setTitle(formValues.productTitle))
    dispatch(setDesc(formValues.productDesc))
    dispatch(setPrice(formValues.price))
    console.log(formValues.productTitle);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFormvalues({
        ...formValues,
        files: acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      formValues.files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <form
      className="w-8/12 md:w-5/12 my-8 p-5 mx-auto"
      onSubmit={submitHandler}
    >
      <div className="mb-[30px]">
        <label
          htmlFor="file"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Product Image
        </label>

        <section className="h-[16rem] w-full sm:w-[70%] lg:w-[50%] flex rounded-lg cursor-pointer border-2 border-dashed border-gray-400 dark:hover:bg-[#101112] hover:bg-[#CCCCCC] transition-all ease-linear duration-150">
          <div
            {...getRootProps({
              className: "w-full rounded-lg flex items-center justify-center",
            })}
          >
            <input {...getInputProps()} />
            {!formValues.files.length ? (
              <div className="flex flex-col items-center justify-center p-2">
                <FiUpload size={30} />
                <p className="mt-2 text-center">Drag and Drop or browse file</p>
              </div>
            ) : (
              <aside className="w-full h-full flex flex-row flex-wrap">
                {formValues.files.map((file) => (
                  <div
                    className="inline-flex rounded-sm border border-solid border-[#eaeaea] w-full h-full"
                    key={file.name}
                  >
                    <div className="w-full overflow-hidden">
                      <img
                        src={file.preview}
                        className="block h-full w-full"
                        // Revoke data url after image is loaded
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </aside>
            )}
          </div>
        </section>
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="title"
          className="block text-[14px] mb-[8px] font-[400] dark:text-white"
        >
          Product Title : {userTitle}
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

      <button type="submit" className="bg-gray-700 dark:bg-gray-200 text-white dark:text-[#000] p-2 rounded-sm">Submit</button>
    </form>
  );
};

export default CreateProduct;
