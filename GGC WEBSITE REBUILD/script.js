/* ==========================================================================
   Go Go Curry USA — Interactive Logic & Squarespace Enhancements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const isExpanded = mobileDrawer.classList.contains('active');
      mobileToggle.innerHTML = isExpanded ? '&#10799;' : '&#9776;';
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
  }

  // 2. Accordion Component Logic (Squarespace Accordion Block Replica)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const isOpen = item.classList.contains('active');

      // Close all other accordion items in same container
      const siblingItems = item.parentElement.querySelectorAll('.accordion-item');
      siblingItems.forEach(sibling => {
        sibling.classList.remove('active');
        const sibContent = sibling.querySelector('.accordion-content');
        if (sibContent) sibContent.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // 3. Category Filter Tabs (Menu Page)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuItems = document.querySelectorAll('[data-category]');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-tab');

        menuItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Contact Form Validation Simulation
  const contactForm = document.getElementById('squarespaceContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      
      submitBtn.innerText = 'Sending Inquiry...';
      submitBtn.disabled = true;

      setTimeout(() => {
        const formContainer = contactForm.parentElement;
        formContainer.innerHTML = `
          <div style="background: #E6F4EA; border: 2px solid #34A853; padding: 2.5rem; border-radius: 12px; text-align: center;">
            <div style="font-size: 3rem; color: #34A853; margin-bottom: 0.5rem;">&#10004;</div>
            <h3 style="font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 0.5rem;">Thank You! Your Message Has Been Received.</h3>
            <p style="color: #525252;">A member of the Go Go Curry USA team will follow up with you shortly at your provided email.</p>
          </div>
        `;
      }, 1200);
    });
  }

  // 5. Careers Application Form Simulation
  const careersForm = document.getElementById('careersApplicationForm');
  if (careersForm) {
    careersForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = careersForm.querySelector('button[type="submit"]');
      const nameInput = document.getElementById('applicantFullName');
      const applicantName = nameInput ? nameInput.value : 'Applicant';
      
      submitBtn.innerText = 'Submitting Application...';
      submitBtn.disabled = true;

      setTimeout(() => {
        const formContainer = careersForm.parentElement;
        formContainer.innerHTML = `
          <div style="background: var(--color-yellow-light); border: 3px solid var(--color-red); padding: 3rem 2rem; border-radius: 12px; text-align: center;">
            <div style="font-size: 3.5rem; color: var(--color-red); margin-bottom: 0.5rem;">🦍</div>
            <h2 style="font-family: 'Outfit', sans-serif; font-weight: 800; color: var(--color-red); margin-bottom: 0.75rem;">Application Received! Thank You, ${applicantName}.</h2>
            <p style="font-size: 1.1rem; color: #222222; max-width: 600px; margin: 0 auto 1.5rem;">
              Your information has been successfully submitted to our hiring team. We review all applications promptly and will reach out via email or phone if your profile matches our store openings!
            </p>
            <a href="index.html" class="btn btn-primary-red">Return To Home Page &rarr;</a>
          </div>
        `;
      }, 1200);
    });
  }
});
