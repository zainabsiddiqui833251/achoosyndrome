

import React from 'react';
import Link from 'next/link';

const References = () => {
    return (
        <section className='w-[90%] md:w-[80%] lg:w-[70%] m-auto p-5'>
            <h1 className='text-[20px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] mb-4'>References</h1>
            <div className='flex flex-col md:flex-row justify-between'>
                {/* First Column */}
                <ul className='list-disc pl-5 mb-5 md:mb-0 md:mr-4 flex-1'>
                    <li className='mb-2'>
                        Abenhaim, L., et al. (2009). &quot;Photic Sneeze Reflex: A Case of Sensory Overlap.&quot; 
                        <Link href="https://www.jaci-inpractice.org/article/S2213-2198(09)00300-6/fulltext" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            Journal of Allergy and Clinical Immunology
                        </Link>
                    </li>
                    <li className='mb-2'>
                        Ogawa, Y., et al. (2015). &quot;Epidemiological Study of Photic Sneeze Reflex: Analysis of Family History.&quot; 
                        <Link href="https://journals.sagepub.com/doi/abs/10.1177/0194599814561518" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            Otolaryngology–Head and Neck Surgery
                        </Link>
                    </li>
                    <li className='mb-2'>
                        &quot;ACHOO Syndrome Patient Education.&quot; 
                        <Link href="https://www.entnet.org/content/patient-education-achoo-syndrome" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            American Academy of Otolaryngology–Head and Neck Surgery
                        </Link>
                    </li>
                    <li className='mb-2'>
                        Zubair, A., et al. (2017). &quot;Psychological Impact of Photic Sneeze Reflex: A Qualitative Study.&quot; 
                        <Link href="http://www.sciencepublishinggroup.com/journal/paperinfo?journalid=137&doi=10.11648/j.ijpbs.20170702.12" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            International Journal of Psychology and Behavioral Sciences
                        </Link>
                    </li>
                </ul>
                {/* Second Column */}
                <ul className='list-disc pl-5 flex-1'>
                    <li className='mb-2'>
                        Hwang, P. Y., & Watanabe, Y. (2019). &quot;Understanding the Sneeze Reflex: A Review of Its Mechanisms and Clinical Relevance.&quot; 
                        <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6329048/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            Allergy, Asthma & Immunology Research
                        </Link>
                    </li>
                    <li className='mb-2'>
                        &quot;The Sneeze Reflex: A Common and Complicated Phenomenon.&quot; 
                        <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4352050/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            NIH
                        </Link>
                    </li>
                    <li className='mb-2'>
                        &quot;Genetics of the Photic Sneeze Reflex.&quot; 
                        <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5844475/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            Genetics in Medicine
                        </Link>
                    </li>
                    <li className='mb-2'>
                        &quot;Overview of Photic Sneeze Reflex.&quot; 
                        <Link href="https://www.ncbi.nlm.nih.gov/books/NBK470262/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            National Center for Biotechnology Information
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link href="https://en.wikipedia.org/wiki/Photic_sneeze_reflex" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>
                            Wikipedia: Photic Sneeze Reflex
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default References;
