import { ContactDetailCard } from '../components/ContactDetailCard'
import Birds from '../components/icons/Birds'
import ContactIcon from '../components/icons/ContactIcon'
import ContactVectorIcon from '../components/icons/ContactVectorIcon'
import styles from '../styles/contactUs.module.css'
import { ContactDetailPersonType } from '../types/contactDetailCardProp.types'
import StaticData from '../json/data.json'
import { useMutation } from '@tanstack/react-query'
import { updateHospitalDetails } from '../hooks/useUpdateHospitalDetails'

const ContactUs = () => {
  const { contactDetails } = StaticData

  const { mutate } = useMutation({ mutationFn: updateHospitalDetails })

  return (
    <div className={styles.container}>
      <div
        className={
          styles.primaryContactsContainer + ' ' + styles.contactContainer
        }
      >
        <ContactVectorIcon
          height={42}
          width={42}
          color='#B9D09B'
          className={styles.heading}
        />
        {contactDetails
          ?.slice(0, 1)
          .map((detail: ContactDetailPersonType) => (
            <ContactDetailCard
              key={crypto.randomUUID()}
              name={detail.name}
              title={detail.title}
              email={detail.email}
              number={detail.number}
              heading={styles.heading}
            />
          ))}
      </div>
      <div className={styles.secondaryContactsContainer}>
        <div className={styles.contactContainer}>
          <ContactVectorIcon
            height={42}
            width={42}
            color='#B9D09B'
            className={styles.heading}
          />
          {contactDetails
            ?.slice(1, 2)
            .map((detail: ContactDetailPersonType) => (
              <ContactDetailCard
                key={crypto.randomUUID()}
                name={detail.name}
                title={detail.title}
                email={detail.email}
                number={detail.number}
                heading={styles.heading}
              />
            ))}
        </div>
        <div className={styles.contactContainer}>
          <ContactVectorIcon
            height={42}
            width={42}
            color='#B9D09B'
            className={styles.heading}
          />
          <div>
            {contactDetails
              ?.slice(2, 3)
              .map((detail: ContactDetailPersonType) => (
                <ContactDetailCard
                  key={crypto.randomUUID()}
                  name={detail.name}
                  title={detail.title}
                  email={detail.email}
                  number={detail.number}
                  heading={styles.heading}
                />
              ))}
          </div>
        </div>
      </div>
      <a href='tel:8726343235'>
        <ContactIcon
          className={styles.contactIcon}
          height={49}
          width={49}
          color='#053233'
        />
      </a>
      <Birds className={styles.birds} />
    </div>
  )
}

ContactUs.auth = true
ContactUs.title = 'Contact Us'
export default ContactUs
