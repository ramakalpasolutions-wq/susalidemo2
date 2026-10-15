export const site = {
  brand: 'SUSALI',
  tagline: 'Bridging the Gap Between Patients and Doctors.',
  description: 'Connecting people. Empowering healthcare. Because every healthcare journey deserves the right connection.',
  email: '',
  phone: '',
  whatsapp: '',
  address: '',
  mapsUrl: '',
};

export const services = [
  { id: '01', icon: 'HeartHandshake', title: 'Patient–Doctor Connection', desc: 'Bringing patients and healthcare professionals closer through organized communication and coordinated hospital appointments.', detail: 'The right connection can make every step clearer.', tag: 'Connection' },
  { id: '02', icon: 'ScanLine', title: 'Digital Health Profiles', desc: 'Helping patients maintain one digital healthcare profile that connects available information across their healthcare journey.', detail: 'One person. One profile. A connected healthcare history.', tag: 'Profiles' },
  { id: '03', icon: 'CalendarCheck2', title: 'Appointment Assistance', desc: 'Supporting the appointment coordination process so patients can understand when and where to attend their arranged consultations.', detail: 'Connecting your healthcare needs with the next step in care.', tag: 'Coordination' },
  { id: '04', icon: 'Building2', title: 'Connected Hospital Care', desc: 'Supporting information flow across hospital consultations, diagnostic investigations, admissions and further treatment.', detail: 'Different stages of care. One connected journey.', tag: 'Hospital Care' },
  { id: '05', icon: 'ClipboardCheck', title: 'Digital Medical Records', desc: 'Bringing available prescriptions, lab reports, scans and treatment documents into a patient\'s digital health profile.', detail: 'Important medical information, connected to your journey.', tag: 'Records' },
  { id: '06', icon: 'RefreshCcw', title: 'Continued Care & Follow-ups', desc: 'Keeping previous healthcare information available while supporting the organization of follow-up recommendations and future visits.', detail: 'Staying connected to care, even after the appointment.', tag: 'Continuity' },
];

export const journey = [
  { num: '01', title: 'Begin Your Journey', desc: 'Register with SUSALI and establish your individual healthcare profile.' },
  { num: '02', title: 'Seek Assistance', desc: 'When a health concern arises, begin the appropriate healthcare consultation process.' },
  { num: '03', title: 'Connect Through SUSALI', desc: 'Log in to your profile and submit the necessary referral and healthcare information.' },
  { num: '04', title: 'Hospital Appointment', desc: 'The appointment is coordinated with the relevant hospital, and details are made available to you.' },
  { num: '05', title: 'Consult Your Doctor', desc: 'Your treating professional evaluates your condition and recommends appropriate care.' },
  { num: '06', title: 'Receive Care', desc: 'Your care may include consultation, diagnostics, hospitalization or surgical treatment.' },
  { num: '07', title: 'Medical Story Updated', desc: 'Authorized staff upload relevant medical documents and treatment information to your profile.' },
  { num: '08', title: 'Stay Connected', desc: 'Access previous records, review follow-ups and continue using your profile for future visits.' },
];

export const faqs = [
  // About SUSALI
  { category: 'About SUSALI', q: 'What is SUSALI?', a: 'SUSALI is a healthcare coordination platform designed to bridge the gap between patients and doctors through organized healthcare connections, hospital appointment coordination and digital access to available medical records.' },
  { category: 'About SUSALI', q: 'What is the main purpose of SUSALI?', a: 'SUSALI aims to make healthcare journeys more connected by bringing together patient information, applicable referral processes, hospital appointment coordination, treatment documentation and continued-care information.' },
  { category: 'About SUSALI', q: 'Is SUSALI a hospital?', a: 'No. SUSALI supports healthcare coordination and digital health information. Medical diagnosis, treatment and surgical procedures are provided by qualified healthcare professionals at the relevant hospitals.' },
  { category: 'About SUSALI', q: 'Can anyone use SUSALI?', a: 'SUSALI services are available to patients who meet the applicable registration and healthcare process requirements. Specific eligibility and access conditions should be confirmed through the official SUSALI process.' },
  // Registration & Profiles
  { category: 'Profiles', q: 'How do I begin using SUSALI?', a: 'The journey begins with the patient registration process and the creation of an individual SUSALI healthcare profile.' },
  { category: 'Profiles', q: 'What is a SUSALI healthcare profile?', a: 'It is the patient\'s digital account where available healthcare information, referral details, appointments and uploaded medical documents can be organized.' },
  { category: 'Profiles', q: 'Do I need to create a new account for every hospital visit?', a: 'No. Registered patients can continue using their existing SUSALI account for future healthcare episodes.' },
  { category: 'Profiles', q: 'Can I view my previous treatment information?', a: 'Yes. Patients can view the available records uploaded to their profiles by authorized hospital personnel, subject to the platform\'s applicable access permissions.' },
  // Appointments
  { category: 'Appointments', q: 'How does SUSALI connect patients with doctors?', a: 'SUSALI supports the applicable referral and hospital appointment coordination process, helping patients attend arranged consultations with healthcare professionals at participating hospitals.' },
  { category: 'Appointments', q: 'Can SUSALI help arrange a hospital appointment?', a: 'Yes. Hospital appointment coordination forms part of the described SUSALI process, subject to the required referral information and participating hospital arrangements.' },
  { category: 'Appointments', q: 'Can I select any doctor or hospital?', a: 'Doctor and hospital options depend on the available healthcare network and the applicable coordination process. SUSALI does not guarantee access to every doctor or hospital.' },
  { category: 'Appointments', q: 'Do I need a referral?', a: 'Under the current SUSALI process, patients must obtain the applicable referral before submitting a hospital appointment request.' },
  { category: 'Appointments', q: 'What happens if I have a new health issue later?', a: 'You continue using your existing SUSALI profile, but a fresh referral is required for the separate new health concern.' },
  // Treatment
  { category: 'Treatment', q: 'What types of healthcare can be involved?', a: 'Depending on medical needs and available hospital arrangements, the journey may involve outpatient consultations, diagnostic investigations, inpatient treatment or surgical procedures.' },
  { category: 'Treatment', q: 'Does SUSALI decide what treatment I need?', a: 'No. Medical assessment, diagnosis and treatment decisions are made by qualified healthcare professionals.' },
  { category: 'Treatment', q: 'What happens after my hospital consultation?', a: 'The hospital may provide treatment, recommend further investigations or advise continued care. Authorized hospital staff upload the relevant available treatment documents to the SUSALI profile.' },
  // Records
  { category: 'Records', q: 'Who uploads my medical reports?', a: 'Authorized hospital staff are responsible for uploading relevant treatment documents following the hospital visit.' },
  { category: 'Records', q: 'What documents can be available in my profile?', a: 'These may include prescriptions, laboratory reports, scan reports, treatment details, discharge summaries and follow-up recommendations.' },
  { category: 'Records', q: 'Can I access my reports from previous visits?', a: 'Yes. Records that have been uploaded and made available to you can be accessed through your existing SUSALI profile.' },
  { category: 'Records', q: 'Will my previous medical records remain linked when I receive a new referral?', a: 'The SUSALI process is designed to retain previous available healthcare records within the patient\'s existing profile while associating new treatment information with subsequent referrals.' },
  { category: 'Records', q: 'Can my doctor automatically see every document in my profile?', a: 'Access to patient medical information depends on the platform\'s authorized access permissions and the applicable healthcare process. Not every participant automatically receives access to every record.' },
  // Continued Care
  { category: 'Continued Care', q: 'What happens when my doctor recommends a follow-up?', a: 'Follow-up information can be recorded as part of your healthcare history. Appointment arrangements and any referral requirements depend on the applicable follow-up process.' },
  { category: 'Continued Care', q: 'Can I continue using SUSALI for future healthcare needs?', a: 'Yes. Registered patients can continue using their existing profiles, following the required referral process for new health concerns.' },
  { category: 'Continued Care', q: 'Can SUSALI be used for medical emergencies?', a: 'The SUSALI promotional website is not an emergency medical service. For emergencies, contact local emergency services or visit the nearest emergency department.' },
];