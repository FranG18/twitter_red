import Tweet from '../models/Tweet'
import User from '../models/User'
import regeneratorRuntime, { async } from "regenerator-runtime";

const controller = {
    test: (req, res) => res.status(200).send({ message: 'Prueba API' }),
    isAuthenticated: (req, res) => {
        if (req.isAuthenticated()) {
            return res.status(200).send({ authenticated: true })
        } else {
            return res.status(200).send({ authenticated: false })
        }
    },
    createTweet: async (req, res) => {
        const { text, parent } = req.body
        const _id = req.user._id
        const newTweet = new Tweet({
            userId: _id,
            text,
            parent: (parent) ? parent : null,
            likes: [],
            retweets: [],
            childrens: [],
        })

        try {
            const data = await newTweet.save()
            const user = await User.findById(_id)

            await user.update({ tweets: [...user.tweets, data._id] })

            if (parent) {
                const tweetParent = await Tweet.findById(parent);
                await tweetParent.update({ childrens: [...tweetParent.childrens, data._id] })
            }

            return res.status(200).send({ message: 'TweetCreado' })
        } catch (error) {
            return res.status(400).send({ error })
        }
    },
    deleteTweet: async (req, res) => {
        const { tweetId } = req.body
        const _id = req.user._id

        try {
            const tweet = await Tweet.findById(tweetId)

            const user = await User.findById(_id)
            user.tweets.splice(user.tweets.indexOf(tweetId), 1)
            await user.save()

            if (tweet.parent) {
                const parentTweet = await Tweet.findById(tweet.parent)
                parentTweet.childrens.splice(parentTweet.childrens.indexOf(tweetId), 1)
                await parentTweet.save()
            }

            await Tweet.findByIdAndDelete(tweetId)

            return res.status(200).send({ message: 'Tweet Eliminado' })

        } catch (error) {
            return res.status(400).send({ error })
        }

    },
    likeTweet: async (req, res) => {
        const { tweetId } = req.body
        const _id = req.user._id

        try {

            const user = await User.findById(_id)
            const tweet = await Tweet.findById(tweetId)

            await user.update({ liked: [...user.liked, tweetId] })
            await tweet.update({ likes: [...tweet.likes, _id] })

            return res.status(200).send({ message: 'Like Guardado' })

        } catch (error) {
            return res.status(400).send({ error })
        }
    },
    unlikeTweet: async (req, res) => {
        const { tweetId } = req.body
        const _id = req.user._id

        try {

            const user = await User.findById(_id)
            const tweet = await Tweet.findById(tweetId)

            user.liked.splice(user.liked.indexOf(tweetId), 1)
            tweet.likes.splice(tweet.likes.indexOf(_id), 1)

            await user.save()
            await tweet.save()

            return res.status(200).send({ message: 'Like Cambiado' })

        } catch (error) {
            return res.status(400).send({ error })
        }
    },
    retweetTweet: async (req, res) => {
        const { tweetId } = req.body
        const _id = req.user._id

        try {

            const user = await User.findById(_id)
            const tweet = await Tweet.findById(tweetId)

            await user.update({ retweets: [...user.retweets, tweetId] })
            await tweet.update({ retweets: [...tweet.retweets, _id] })

            return res.status(200).send({ message: 'Reetweet Guardado' })

        } catch (error) {
            return res.status(400).send({ error })
        }

    },
    unretweetTweet: async (req, res) => {
        const { tweetId } = req.body
        const _id = req.user._id

        try {

            const user = await User.findById(_id)
            const tweet = await Tweet.findById(tweetId)

            user.retweets.splice(user.retweets.indexOf(tweetId), 1)
            tweet.retweets.splice(tweet.retweets.indexOf(_id), 1)

            await user.save()
            await tweet.save()

            return res.status(200).send({ message: 'Reetweet Cambiado' })

        } catch (error) {
            return res.status(400).send({ error })
        }
    },
    getTweet: async (req, res) => {

        const { _id } = req.query

        try {
            return res.status(200).send({ tweet: await Tweet.findById(_id) })
        } catch (error) {
            return res.status(400).send({ error })
        }

    },
    getAllTweets: async (req, res) => {

        try {
            return res.status(200).send({ tweets: await Tweet.find({}) })
        } catch (error) {
            return res.status(400).send({ error })
        }
    },
    getTweets: async (req, res) => {

        const { _id } = req.query

        try {
            return res.status(200).send({ tweets: await Tweet.find({ userId: _id }) })
        } catch (error) {
            return res.status(400).send({ error })
        }
    }
}

export default controller