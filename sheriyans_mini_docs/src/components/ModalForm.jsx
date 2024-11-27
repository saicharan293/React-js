import React, { useContext, useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { DataContext } from '../context/ContextApi'

const ModalForm = ({isOpen, setIsOpen}) => {
    const formRef=useRef()
    const [formData, setFormData] = useState({
        description:'',
        filesize:'',
        close:true,
        tag:{
            isOpen:false,
            tagTitle:'',
            tagColor:'green'
        }
    })
    const {addDoc} = useContext(DataContext)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Handle nested tag inputs
        if (name.startsWith('tag.')) {
          setFormData(prev => ({
            ...prev,
            tag: {
              ...prev.tag,
              [name.split('.')[1]]: value
            }
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        }
      };
    const handleSubmit=(e)=>{
        e.preventDefault();
        addDoc(formData)
        setIsOpen(false)
        setFormData({
            description: "",
            filesize: "",
            close: true,
            tag: {
              isOpen: false,
              tagTitle: "",
              tagColor: "green",
            },
        });

    }
  return (
    <div className='p-4'>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <ImCross className="w-6 h-6" />
            </button>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Add New Entry</h2>

              {/* Description Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input 
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter description"
                  required
                />
              </div>

              {/* Filesize Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  File Size
                </label>
                <input 
                  type="text"
                  name="filesize"
                  value={formData.filesize}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter file size"
                  required
                />
              </div>

              {/* Tag Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tag Title
                </label>
                <input 
                  type="text"
                  name="tag.tagTitle"
                  value={formData.tag.tagTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter tag title"
                  required
                />
              </div>

              {/* Tag Color Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tag Color
                </label>
                <select
                  name="tag.tagColor"
                  value={formData.tag.tagColor}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
              {/* Tag Color Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tag Open
                </label>
                <select
                  name="tag.isOpen"
                  value={formData.tag.isOpen}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
              >
                Add Entry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalForm
