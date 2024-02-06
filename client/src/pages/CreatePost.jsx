import {TextInput, Select, FileInput, Button} from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type='text' placeholder='Title required' required id='title' className='flex-1' />
                <Select>
                    <option value="uncategorized">Select a Category</option>
                    <option value="javascript">Javascript</option>
                    <option value="javascript">ReactJs</option>
                    <option value="javascript">Python</option>
                </Select>
            </div>
            <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput type='file' accept='image/*' />
                <Button type='button' gradientDuoTone='purpleToPink' size='sm' outline>Upload image</Button>
            </div>
            <ReactQuill theme='snow' placeholder='Write something...' className='h-72 mb-2' required />
            <Button type='submit' gradientDuoTone='purpleToPink' className='mt-3'>Submit</Button>
        </form>
    </div>
  )
}

export default CreatePost