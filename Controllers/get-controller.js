

export const get = async (req, res) => {

    try {
    res.status(200).send("hello")
    } catch (error) {
      res.status(500).json(error);
    }
  
  
  };