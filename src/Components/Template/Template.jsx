import TemplateTable from "../Table/TemplateTable";
import { useState } from "react";

function Template() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateTemplateClick = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
  };

  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[2rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Template
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <h1>Template Message</h1>
        <button onClick={handleCreateTemplateClick}>Create New Template</button>
      </div>
      <TemplateTable />
      {showCreateModal && (
        <div className="overlay md:p-[3rem] p-[1rem] flex flex-col gap-[3rem]">
          <div className="modal ">
            <div className="flex flex-row justify-between mb-5">
            <h2>Create New Template</h2>
            <button onClick={handleCloseModal}>Close</button>
          
            </div>
          <div className="flex flex-row justify-evenly">
            <div className="w-[50%] flex flex-col gap-[1.5rem] border-2">
              <div>
                <h1 className="font-medium text-[20px]">Template Category</h1>
                <p>Your template should fall under one of these categories.</p>
                <select
                  type="email"
                  className=" text-[#bbb]"
                  autoComplete="off"
                  placeholder="Buiness Type"
                  required
                >
                  <label></label>
                  <option value="00">Buiness Type</option>
                  <option value="01">Lorem</option>
                  <option value="02">Espum</option>
                </select>
              </div>
              <div>
                <h1 className="font-medium text-[20px]">Template Name</h1>
                <p>
                  Name can only be in lowercase alphanumeric characters and
                  underscores. Special characters and white-space are not
                  allowede.g. - app_verification_code
                </p>
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Template Name"
                    required
                  />
                  <label></label>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-[20px]">Template Type</h1>
                <p>
                  Your template type should fall under one of these categories.
                </p>
                <select
                  type="email"
                  className=" text-[#bbb]"
                  autoComplete="off"
                  placeholder="Buiness Type"
                  required
                >
                  <label></label>
                  <option value="00">Buiness Type</option>
                  <option value="01">Lorem</option>
                  <option value="02">Espum</option>
                </select>
              </div>
              <div>
                <h1 className="font-medium text-[20px]">Template Format</h1>
                <p>
                  Use text formatting - *bold* , _italic_ & ~strikethrough~ Your
                  message content. Up to 1024 characters are allowed .e.g. -
                  Hello 1, your code will expire in 2 mins..
                </p>
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Enter your message here..."
                    required
                  />
                  <label></label>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-[20px]">
                  Template Footer (Optional)
                </h1>
                <p>Your message content. Upto 60 characters are allowed.</p>
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Enter Footer text here..."
                    required
                  />
                  <label></label>
                </div>
              </div>
            </div>
            <div className="w-[50%] border-2"></div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Template;
