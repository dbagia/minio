import { Client } from 'minio'
import R from 'ramda'

export const client = new Client({
	endPoint: '127.0.0.1',
    port: 9000,
    secure: false,
    accessKey: '704U1I44X4986F794SQQ',
    secretKey: 'pj+NSPGdse6h0LvvxsptJCzAe8m/qistvWjwQaLM'
})

export const sendFileToStorage = (localPath, destFolder) => {

	return client.bucketExists(destFolder, (err) => {

		})
	})
}