export interface Contact {
  type: string
  title: string
  value: string
  link?: string
}

export interface CommonQuestion {
  id: string
  title: string
  htmlBody: string
}

export interface MetaModel {
  title: string
  description: string
  keywords: string
}

export interface Branch {
  id: string
  title: string
  address: string
  phone: string
  email: string | null
  branchManager: string | null
  numberOfEmployees: number | null
  establishedAt: string
}

export interface AboutModel {
  title: string
  mainPhoto: string
  detail: string
  summary: string
  footerLogo: string
  mainLogo: string
}

export interface AdsModel {
  id: string
  title: string
  link: string
  photo: string
}

export interface SocialModel {
  title: string
  urlNumber: string
  icon: string
}
export interface ContactRequestResponse {
  successed: Boolean
  id: string
}

export interface CommonQuestionResponse {
  commonQuestions: CommonQuestion[]
}

export interface GlobalDataResponse {
  meta: MetaModel
  about: AboutModel
  branches: Branch[]
  contacts: Contact[]
  ads: AdsModel[]
  socials: SocialModel[]
}

export interface ContactSupplierForm {
  companyName: string
  contactPersonName: string
  phoneNumber: string
  email: string
  typeOfSuppliedMaterials: string
  yearsOfExperience: Number
  companyBrief: string
  attachments: File[]
  additionalNotes: string | null
}

export interface ContactSubcontractorForm {
  companyName: string
  contactPersonName: string
  phoneNumber: string
  email: string
  typeOfWork: string
  yearsOfExperience: Number
  previousProjects: string
  attachments: File[]
  numberOfStaff: Number
  additionalNotes: string | null
}

export interface ContactCareerForm {
  fullName: string
  email: string
  phoneNumber: string
  positionAppliedFor: string
  specialization: string
  yearsOfExperience: Number
  coverLetter: string | null
  resume: File
}

export interface ContactInvestmentForm {
  fullName: string
  email: string
  phoneNumber: string
  companyName: string | null
  typeOfInvestment: string
  investmentAmount: string
  businessProposal: string | null
  additionalNotes: string | null
  attachments: File[] | null
}
