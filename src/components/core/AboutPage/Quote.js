import HighlightText from "../HomePage/HighlightText"

const Quote = () => {
  return (
    <div>
      <div>
      We are passionate about revolutionizing the way we learn. Our
        innovative platform <HighlightText text={"combines technology"} />,{" "}
        <span className="text-brown-600">
          expertise
        </span>
        , and community to create an
      <span>
        unparalled educational experience
      </span>
      </div>
    </div>
  )
}
export default Quote