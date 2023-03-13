<template>
  <div id="profiles_section">
    <div id="title_sub">
      <div id="sub">Meet our Doctor’s</div>
      <div id="title">Our highly qualified Professionals</div>
    </div>
    <div id="searchWrapper">
      <input type="text" placeholder="Find a doctor using their name" />
      <input type="text" placeholder="Location" />
      <input type="text" placeholder="Specility" />
      <button>Search</button>
    </div>
    <div id="profiles_wrapper">
      <div id="navigation">
        <IconsArrow id="left" />
        <IconsArrow id="right" />
      </div>
      <div id="container">
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
        <div id="profile">
          <div id="img">
            <img src="~/assets/images/doctor.svg" alt="" />
            <div id="label">5+ years Experience</div>
          </div>
          <div id="details">
            <div id="name">Dr. Bashanta <IconsCircle /></div>
            <div id="speciality_rating">
              <div id="speciality">Dermatologists</div>
              <div id="rating">
                <div id="stars">
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                  <IconsStar />
                </div>
                (155+)
              </div>
            </div>
            <div id="timming_wrapper">
              <div>Opening hours</div>
              <div id="time">4:30PM → 7:45PM</div>
            </div>
            <div id="address">20 Poland Road, Wairau Valley, Auckland 0627</div>
            <button id="viewProfile">View Profile</button>
          </div>
        </div>
      </div>
      <div id="pagination">
        <IconsCircle />
        <IconsCircle />
        <IconsCircle />
        <IconsCircle />
        <IconsCircle />
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#profiles_section {
  @apply mt-24 px-36;

  > #title_sub {
    @apply text-center;

    #sub {
      @apply text-primary text-sm font-medium;
    }

    #title {
      @apply text-4xl font-bold mt-[6px];
    }
  }

  > #searchWrapper {
    @apply my-12  h-[88px] px-8 py-4;
    @apply flex flex-row justify-between items-center rounded-lg shadow-2xl;
    > :nth-child(1) {
    }
    > input {
      @apply h-[24px] w-[300px] text-base font-normal focus:outline-none;
      @apply text-sm font-medium;
      @apply px-2;
    }
    > :nth-child(2) {
      @apply border-x-1 border-gray-300 px-4;
    }
    > button {
      @apply bg-primary h-14 w-28 text-white text-sm font-medium rounded-xl;
      @apply px-8 py-2;
    }
  }
  > #profiles_wrapper {
    @apply flex flex-col justify-between items-center mb-12;
    > #navigation {
      @apply w-full h-[24px] flex flex-row justify-end items-center gap-x-12 mb-12;
      > #left {
        @apply w-[24px] h-[24px] text-primary opacity-25;
        @apply transform rotate-180;
      }
      > #right {
        @apply w-[24px] h-[24px] text-primary;
      }
    }

    #container {
      @apply w-full flex flex-row justify-between items-center flex-wrap gap-y-12 mb-12;
      > #profile {
        @apply min-w-[365px] h-[434px] rounded-2xl shadow-lg;

        > #img {
          @apply w-full h-[200px] rounded-t-2xl relative;

          > img {
            @apply w-full h-full object-cover rounded-t-2xl;
          }
          > #label {
            @apply w-[162px] h-9 rounded-tl-xl z-10;
            @apply text-white text-sm text-center p-2;
            @apply bg-primary;
            @apply absolute bottom-0 right-0;
          }
        }
        > #details {
          @apply w-full h-[234px] flex flex-col justify-start items-start gap-y-[6px];
          @apply p-6;
          > #name {
            @apply text-[22px] font-bold flex items-center gap-x-2;

            > svg {
              @apply w-4 h-4 inline-block text-availableGreen;
            }
          }
          > #speciality_rating {
            @apply w-full flex flex-row justify-between items-center;
            > #speciality {
              @apply font-medium text-primary;
            }
            > #rating {
              @apply inline-block;
              @apply text-sm font-medium;

              > #stars {
                @apply inline-block;
                > svg {
                  @apply w-4 h-4 inline-block text-ratingYellow;
                }
              }
            }
          }
          > #timming_wrapper {
            @apply w-full flex flex-row justify-between items-center;
            > #time {
              @apply text-dustygray text-sm font-medium;
            }
          }
          > #address {
            @apply text-dustygray text-sm font-medium;
          }
          > #viewProfile {
            @apply w-[130px] h-[44px]  rounded-md mt-2;
            @apply text-primary text-sm font-semibold border border-primary;
            /* @apply px-6 py-2; */
          }
        }
      }
    }
    > #pagination {
      @apply w-full h-4 flex flex-row justify-center items-center gap-x-3;
      > svg {
        @apply w-4 h-4 text-primarylight;
      }
      > :nth-child(1) {
        @apply text-primary;
      }
    }
  }
}
</style>
