import {assert, expect} from 'chai'
import { client } from './index'

describe('Minio Client', ()=>{
	it('is of type object', done => {		
		expect(typeof client === 'object').to.be.true
		done()
	})
})

describe('Bucket creation', ()=>{

	it('checks if mybucket exists and if not, it creates a bucket named mybucket', done => {

		client.bucketExists('mybucket1111').then(()=>{
			return true
		}, (err) => {
			console.log('Folder not found')
			return false
		}).then((response)=>{
			
			
		})
		client.bucketExists('mybucket', (err) => {

			if(err) {
				console.log('Bucket does not exist. Lets create one')

				client.makeBucket('mybucket', 'us-east-1', (err) => {
					if(err) console.log(err)

					console.log('Bucket mybucket Created Successfully')

					done()
				})
			}

			console.log('bucket already exists')

			done()
		})
		
	})
})

describe('File Upload', () => {

	it('updloads a file', done => {

		const file = './.gitignore'

		client.fPutObject('mybucket', '.gitignore', file, 'application/octet-stream', (err) => {

			if(err) {
				console.error('File could not be uploaded', err)
				done()
			} else {
				console.log('File Uploaded Successfully!')
				done()
			}

		})
	})

})