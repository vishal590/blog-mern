import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://images.pexels.com/photos/19422490/pexels-photo-19422490/free-photo-of-beautiful-young-brunette-leaning-out-from-behind-a-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },

    }, {timestamps: true}
)

const Post = mongoose.model('Post', postSchema);

export default Post;