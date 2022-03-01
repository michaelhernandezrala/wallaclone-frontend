import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import './Settings.css'
import Swal from 'sweetalert2';

function Settings() {

  const handleClick = (e) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <Layout title='Settings'>
      <main className='settings'>
        <Container>
          <section className='settings__content'>
            <div className='settings__feature'>
              <div className='feature__info'>
                <p className='feature__info--title'><strong>Delete this account
                </strong></p>
                <p>Once you delete an account, there is no going back. Please be certain.
                </p>
              </div>
              <button onClick={handleClick} className='delete__account'>Delete</button>
            </div>
          </section>
        </Container>
      </main>
    </Layout>
  )
}

export default Settings