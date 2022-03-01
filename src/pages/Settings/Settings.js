import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import './Settings.css'

function Settings() {
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
              <button className='delete__account'>Delete</button>
            </div>
          </section>
        </Container>
      </main>
    </Layout>
  )
}

export default Settings