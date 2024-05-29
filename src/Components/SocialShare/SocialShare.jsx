'use client'
import { useState } from 'react'
import { CloudArrowUp ,FacebookLogo, Share, TwitterLogo } from 'phosphor-react'
import { Button, Modal } from 'keep-react'

const SocialMediaShare = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // Replace 'https://yourcostumeurl.com' with your actual costume URL
    const costumeUrl = 'https://yourcostumeurl.com';

    const postDescription = "Check out our food sharing platform! Share surplus food to help those in need, or find free food donations near you. Together, we can reduce food waste and hunger.";

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(costumeUrl)}&quote=${encodeURIComponent(postDescription)}`;

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(costumeUrl)}&text=${encodeURIComponent(postDescription)}`;

    const openShareWindow = (url) => {
        window.open(url, '_blank', 'width=600,height=400');
    };
    return (
        <div>
            <div onClick={openModal} className="fixed bottom-0 transform z-50 flex items-center justify-center hover:border-blue-600 hover:border-l-6 border-l-4 hover:p-6 transition-all p-2 bg-slate-800 rounded-tl-2xl right-0">
                <Share  className="text-blue-100 font-bold" size="20" />
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="space-y-3">
                    <Modal.Icon>
                        <CloudArrowUp size={28} color="#1B4DFF" />
                    </Modal.Icon>
                    <Modal.Content>
                        <div className="mb-6">
                            <h3 className="mb-2 text-body-1 font-medium text-metal-900">Share on Social Media</h3>
                            <p className="text-body-4 font-normal text-metal-600">
                                Choose a platform to share:
                            </p>
                        </div>
                        <div className="flex gap-2 w-full ">
                            <Button onClick={() => openShareWindow(facebookShareUrl)} className="social-icon w-full p-3">
                                <FacebookLogo size={24} />
                            </Button>
                            <Button onClick={() => openShareWindow(twitterShareUrl)} className="social-icon w-full p-3">
                                <TwitterLogo size={24} />
                            </Button>
                        </div>
                    </Modal.Content>
                    <Modal.Footer>
                        <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SocialMediaShare;
